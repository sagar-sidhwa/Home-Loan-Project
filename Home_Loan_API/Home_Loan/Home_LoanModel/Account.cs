using System;
using System.Collections.Generic;

#nullable disable

namespace Home_Loan.Home_LoanModel
{
    public partial class Account
    {
        public long AccountNumber { get; set; }
        public int Balance { get; set; }
        public long? Cid { get; set; }

        public virtual PersonalDetail CidNavigation { get; set; }
    }
}
