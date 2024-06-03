'use server';

export default async function handleLogin(formData: FormData) {


    const response = formData.get('g-recaptcha-response');
    const secret = '6Ld4ssMpAAAAAE9HAPJSHN6p88hJbHdzKrcxgRPS';


    const rs = await fetch(`https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${response}`, {
        method: "POST",
    });


    return (rs.json());

}