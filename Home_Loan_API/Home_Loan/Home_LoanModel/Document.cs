using System;
using System.Collections.Generic;

#nullable disable

namespace Home_Loan.Home_LoanModel
{
    public partial class Document
    {
        public int DId { get; set; }
        public string Pancard { get; set; }
        public string VoterId { get; set; }
        public string SalarySlip { get; set; }
        public string Loa { get; set; }
        public string Noc { get; set; }
        public string Agreement { get; set; }
        public int? LId { get; set; }
        public int? PrId { get; set; }
        public int? InId { get; set; }
        public long? Cid { get; set; }

        public virtual PersonalDetail CidNavigation { get; set; }
        public virtual IncomeDetail In { get; set; }
        public virtual Loan LIdNavigation { get; set; }
        public virtual Property Pr { get; set; }
    }
}
