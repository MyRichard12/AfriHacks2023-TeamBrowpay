import { base_url, httpService } from "./config";
import Cookies from 'universal-cookie'


export const registerUserApi = async (formValues) => {
  try {
    const response = await httpService.post(
      `${base_url}/user/register`,
      formValues
    );

    let { name, email } = formValues.formData;

    // console.log(name, email)

    if (response.status == 200) {
      let message =
        "Welcome to Zamba, its nice having you onboard, with Zamba your business management just got better";
      // await httpService.post(`${base_url}/registerMail`, {email: email, user: name, text: message, subject: 'Registration Successful' })
    }

    return Promise.resolve(response.data);
  } catch (error) {
    return Promise.reject({ error });
  }
};

export const generateRegistrationToken = async (formValues) => {
  try {
    const { email } = formValues;

    const response = await httpService
      .get(`${base_url}/genRegToken`, { params: { email }})
      .then(async ({ data, status }) => {
        if (status === 200) {
          let message = `Click the button to proceed with your account verification`;

          let prompt = {
            link: `${base_url}/verifyRegToken?token=${data.token}&email=${email}`,
            text: "Verify Account",
            type: "reg_verification",
          };

          await httpService.post(`${base_url}/sendActivation`, {
            email: email,
            text: message,
            subject: "Zamba Registration token",
            prompt,
          });
        }
      })
      .catch((error) => {
        return Promise.reject({ error });
      });

    return Promise.resolve("Token generated successfully");
  } catch (error) {
    return Promise.reject({ error });
  }
};

export const loginUserApi = async (formValues) => {
  try {
    const response = await httpService.post(
      `${base_url}/user/login`,
      formValues
    );

    return Promise.resolve(response.data);
  } catch (error) {
    return Promise.reject( error );
  }
};

// initiate password reset
export const initiateReset = async (formValues) => {
  const { email } = formValues
  try {
    const {data, status} = await httpService.get(`${base_url}/initiatePasswordReset`, {params: {email}});

    // return Promise.resolve(response.data);
    if(status == 200){
      let message = `Click on the Link below to change your password, if you did not request this no further step is required. Link expires in 5 minutes.`;

      let prompt = {
        link: `localhost:5173/password-confirmation?token=${data.token}`,
        text: "RESET PASSWORD",
        type: "password_reset",
      };

      await httpService.post(`${base_url}/resetPasswordMail`, {
        email: email,
        text: message,
        subject: "Zamba Password Reset",
        prompt,
      });

    }
  } catch (error) {
    return Promise.reject( error );
  }
}

// verify password reset token
export const verifyPassToken = async (token) => {

  try {
    const { data, status } = await httpService.get(`${base_url}/verify-token`, {params: {token}})
      
    return Promise.resolve(data)

  } catch (error) {
    return Promise.reject(error)
  }

}