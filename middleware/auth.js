export default function ({redirect}) {
if (localStorage.getItem('AuthUser') !== null)
{
   const user = JSON.parse(localStorage.getItem('AuthUser'))
    console.log(user);
 //redirect('/login?message=login')
}

}
