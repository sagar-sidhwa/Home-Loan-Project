using System;
using System.Collections.Generic;

#nullable disable

namespace Home_Loan.Home_LoanModel
{
    public partial class Loan
    {
        public Loan()
        {
            Applications = new HashSet<Application>();
            Documents = new HashSet<Document>();
        }

        public int LId { get; set; }
        public int MaxLoan { get; set; }
        public double? InterestRate { get; set; }
        public int Tenure { get; set; }
        public int LoanAmt { get; set; }
        public int? PrId { get; set; }
        public int? InId { get; set; }
        public long? Cid { get; set; }

        public virtual PersonalDetail CidNavigation { get; set; }
        public virtual IncomeDetail In { get; set; }
        public virtual Property Pr { get; set; }
        public virtual ICollection<Application> Applications { get; set; }
        public virtual ICollection<Document> Documents { get; set; }
    }
}
