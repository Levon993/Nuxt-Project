import Cookies from 'js-cookie'
if(localStorage.getItem('AuthUser'))
{
    const {access_token} = JSON.parse(localStorage.getItem('AuthUser'))
    Cookies.set('token', access_token)
    
}
