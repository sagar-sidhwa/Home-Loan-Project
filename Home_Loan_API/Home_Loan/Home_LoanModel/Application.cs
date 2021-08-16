using System;
using System.Collections.Generic;

#nullable disable

namespace Home_Loan.Home_LoanModel
{
    public partial class Application
    {
        public long ApplicationNumber { get; set; }
        public string LoanStatus { get; set; }
        public int? LId { get; set; }
        public int? PrId { get; set; }
        public int? InId { get; set; }
        public long? Cid { get; set; }
        public long? Aid { get; set; }

        public virtual Admin AidNavigation { get; set; }
        public virtual PersonalDetail CidNavigation { get; set; }
        public virtual IncomeDetail In { get; set; }
        public virtual Loan LIdNavigation { get; set; }
        public virtual Property Pr { get; set; }
    }
}
