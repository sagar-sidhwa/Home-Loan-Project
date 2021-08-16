using System;
using System.Collections.Generic;

#nullable disable

namespace Home_Loan.Home_LoanModel
{
    public partial class Property
    {
        public Property()
        {
            Applications = new HashSet<Application>();
            Documents = new HashSet<Document>();
            Loans = new HashSet<Loan>();
        }

        public int PrId { get; set; }
        public string PropertyName { get; set; }
        public string Location { get; set; }
        public int Amount { get; set; }
        public int? InId { get; set; }
        public long? Cid { get; set; }

        public virtual PersonalDetail CidNavigation { get; set; }
        public virtual IncomeDetail In { get; set; }
        public virtual ICollection<Application> Applications { get; set; }
        public virtual ICollection<Document> Documents { get; set; }
        public virtual ICollection<Loan> Loans { get; set; }
    }
}
