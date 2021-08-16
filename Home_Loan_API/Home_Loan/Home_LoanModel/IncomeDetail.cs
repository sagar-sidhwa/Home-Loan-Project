using System;
using System.Collections.Generic;

#nullable disable

namespace Home_Loan.Home_LoanModel
{
    public partial class IncomeDetail
    {
        public IncomeDetail()
        {
            Applications = new HashSet<Application>();
            Documents = new HashSet<Document>();
            Loans = new HashSet<Loan>();
            Properties = new HashSet<Property>();
        }

        public int InId { get; set; }
        public string TypeEmployment { get; set; }
        public int RetirementAge { get; set; }
        public string OrganizationType { get; set; }
        public string OrganizationName { get; set; }
        public string OrganizationAddress { get; set; }
        public int MonthlySalary { get; set; }
        public long? Cid { get; set; }

        public virtual PersonalDetail CidNavigation { get; set; }
        public virtual ICollection<Application> Applications { get; set; }
        public virtual ICollection<Document> Documents { get; set; }
        public virtual ICollection<Loan> Loans { get; set; }
        public virtual ICollection<Property> Properties { get; set; }
    }
}
