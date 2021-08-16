using System;
using System.Collections.Generic;

#nullable disable

namespace Home_Loan.Home_LoanModel
{
    public partial class PersonalDetail
    {
        public PersonalDetail()
        {
            Accounts = new HashSet<Account>();
            Applications = new HashSet<Application>();
            Documents = new HashSet<Document>();
            IncomeDetails = new HashSet<IncomeDetail>();
            Loans = new HashSet<Loan>();
            Properties = new HashSet<Property>();
        }

        public long Cid { get; set; }
        public string FirstName { get; set; }
        public string MiddleName { get; set; }
        public string LastName { get; set; }
        public string Gender { get; set; }
        public string Address { get; set; }
        public string PhoneNumber { get; set; }
        public DateTime Dob { get; set; }
        public int? Age { get; set; }
        public string Email { get; set; }
        public string Nationality { get; set; }
        public long AadharNo { get; set; }
        public string PanNo { get; set; }
        public string Password { get; set; }
        public string ConfirmPassword { get; set; }

        public virtual ICollection<Account> Accounts { get; set; }
        public virtual ICollection<Application> Applications { get; set; }
        public virtual ICollection<Document> Documents { get; set; }
        public virtual ICollection<IncomeDetail> IncomeDetails { get; set; }
        public virtual ICollection<Loan> Loans { get; set; }
        public virtual ICollection<Property> Properties { get; set; }
    }
}
