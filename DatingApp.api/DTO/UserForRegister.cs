using System.ComponentModel.DataAnnotations;

namespace DatingApp.api.DTO
{
    public class UserForRegister
    {
        [Required]
        public string UserName { get; set; }
        [Required]
        [StringLength(8,MinimumLength=4,ErrorMessage="You moust specify password between 4 to 8 characters")]
          public string Password { get; set; }
    }
}