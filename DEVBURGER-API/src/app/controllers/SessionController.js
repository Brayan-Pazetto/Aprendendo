import * as Yup from 'yup';
import User from '../models/User';

class SessionController {
    async store(request, response) {

        const schema = Yup.object({
            email: Yup.string().email().required(),
            password: Yup.string().min(6).required(),
        });

        const isValid = await schema.isValid(request.body);

        const emailOrPasswordInvalid = () =>{
            return response
            .status(401)
            .json({ error: 'Make sure your email or password is correct'});
        }

        if (!isValid) {
           return emailOrPasswordInvalid();
        };

        const { email, password } = request.body;

        const user = await User.findOne({
            where: {
                email,
            },
        });

        if (!user) {
           return  emailOrPasswordInvalid();
        };

        const isSamePassword = await user.comparePassword(password);

        if (!isSamePassword) {
           return emailOrPasswordInvalid();
        };


        return response.status(201).json({ 
            id: user.id,
            name: user.name,
            email,
            admin: user.admin,
        });
    };
}

export default new SessionController();