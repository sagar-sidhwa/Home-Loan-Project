using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace Home_Loan.Home_LoanModel
{
    public partial class Home_LoanContext : DbContext
    {
        public Home_LoanContext()
        {
        }

        public Home_LoanContext(DbContextOptions<Home_LoanContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Account> Accounts { get; set; }
        public virtual DbSet<Admin> Admins { get; set; }
        public virtual DbSet<Application> Applications { get; set; }
        public virtual DbSet<Document> Documents { get; set; }
        public virtual DbSet<IncomeDetail> IncomeDetails { get; set; }
        public virtual DbSet<Loan> Loans { get; set; }
        public virtual DbSet<PersonalDetail> PersonalDetails { get; set; }
        public virtual DbSet<Property> Properties { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Server=LAPTOP-POIB3TDL;Database=Home_Loan;Trusted_Connection=True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "SQL_Latin1_General_CP1_CI_AS");

            modelBuilder.Entity<Account>(entity =>
            {
                entity.HasKey(e => e.AccountNumber)
                    .HasName("pk_acno_id");

                entity.ToTable("ACCOUNT");

                entity.Property(e => e.AccountNumber).HasColumnName("ACCOUNT_NUMBER");

                entity.Property(e => e.Balance).HasColumnName("BALANCE");

                entity.Property(e => e.Cid).HasColumnName("CID");

                entity.HasOne(d => d.CidNavigation)
                    .WithMany(p => p.Accounts)
                    .HasForeignKey(d => d.Cid)
                    .HasConstraintName("fk_account_cid");
            });

            modelBuilder.Entity<Admin>(entity =>
            {
                entity.HasKey(e => e.Aid)
                    .HasName("pk_aid");

                entity.ToTable("ADMIN");

                entity.HasIndex(e => e.Email, "UQ__ADMIN__161CF724478AB99F")
                    .IsUnique();

                entity.HasIndex(e => e.PhoneNumber, "UQ__ADMIN__D94A4FFBA6C3272E")
                    .IsUnique();

                entity.Property(e => e.Aid).HasColumnName("AID");

                entity.Property(e => e.BankName)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("BANK_NAME");

                entity.Property(e => e.ConfirmPassword)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("CONFIRM_PASSWORD");

                entity.Property(e => e.Email)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("EMAIL");

                entity.Property(e => e.FirstName)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("FIRST_NAME");

                entity.Property(e => e.Gender)
                    .HasMaxLength(10)
                    .IsUnicode(false)
                    .HasColumnName("GENDER");

                entity.Property(e => e.LastName)
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("LAST_NAME");

                entity.Property(e => e.MiddleName)
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("MIDDLE_NAME");

                entity.Property(e => e.Nationality)
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("NATIONALITY")
                    .HasDefaultValueSql("('INDIAN')");

                entity.Property(e => e.Password)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("PASSWORD");

                entity.Property(e => e.PhoneNumber)
                    .IsRequired()
                    .HasMaxLength(10)
                    .IsUnicode(false)
                    .HasColumnName("PHONE_NUMBER");
            });

            modelBuilder.Entity<Application>(entity =>
            {
                entity.HasKey(e => e.ApplicationNumber)
                    .HasName("pk_apno_id");

                entity.ToTable("APPLICATION");

                entity.Property(e => e.ApplicationNumber).HasColumnName("APPLICATION_NUMBER");

                entity.Property(e => e.Aid).HasColumnName("AID");

                entity.Property(e => e.Cid).HasColumnName("CID");

                entity.Property(e => e.InId).HasColumnName("IN_ID");

                entity.Property(e => e.LId).HasColumnName("L_ID");

                entity.Property(e => e.LoanStatus)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("LOAN_STATUS")
                    .HasDefaultValueSql("('Sent for Verification')");

                entity.Property(e => e.PrId).HasColumnName("PR_ID");

                entity.HasOne(d => d.AidNavigation)
                    .WithMany(p => p.Applications)
                    .HasForeignKey(d => d.Aid)
                    .HasConstraintName("fk_application_aid");

                entity.HasOne(d => d.CidNavigation)
                    .WithMany(p => p.Applications)
                    .HasForeignKey(d => d.Cid)
                    .HasConstraintName("fk_application_cid");

                entity.HasOne(d => d.In)
                    .WithMany(p => p.Applications)
                    .HasForeignKey(d => d.InId)
                    .HasConstraintName("fk_application_in_id");

                entity.HasOne(d => d.LIdNavigation)
                    .WithMany(p => p.Applications)
                    .HasForeignKey(d => d.LId)
                    .HasConstraintName("fk_application_ln_id");

                entity.HasOne(d => d.Pr)
                    .WithMany(p => p.Applications)
                    .HasForeignKey(d => d.PrId)
                    .HasConstraintName("fk_application_pr_id");
            });

            modelBuilder.Entity<Document>(entity =>
            {
                entity.HasKey(e => e.DId)
                    .HasName("pk_did");

                entity.ToTable("DOCUMENT");

                entity.Property(e => e.DId).HasColumnName("D_ID");

                entity.Property(e => e.Agreement)
                    .IsRequired()
                    .IsUnicode(false)
                    .HasColumnName("AGREEMENT");

                entity.Property(e => e.Cid).HasColumnName("CID");

                entity.Property(e => e.InId).HasColumnName("IN_ID");

                entity.Property(e => e.LId).HasColumnName("L_ID");

                entity.Property(e => e.Loa)
                    .IsRequired()
                    .IsUnicode(false)
                    .HasColumnName("LOA");

                entity.Property(e => e.Noc)
                    .IsRequired()
                    .IsUnicode(false)
                    .HasColumnName("NOC");

                entity.Property(e => e.Pancard)
                    .IsRequired()
                    .IsUnicode(false)
                    .HasColumnName("PANCARD");

                entity.Property(e => e.PrId).HasColumnName("PR_ID");

                entity.Property(e => e.SalarySlip)
                    .IsRequired()
                    .IsUnicode(false)
                    .HasColumnName("SALARY_SLIP");

                entity.Property(e => e.VoterId)
                    .IsRequired()
                    .IsUnicode(false)
                    .HasColumnName("VOTER_ID");

                entity.HasOne(d => d.CidNavigation)
                    .WithMany(p => p.Documents)
                    .HasForeignKey(d => d.Cid)
                    .HasConstraintName("fk_document_cid");

                entity.HasOne(d => d.In)
                    .WithMany(p => p.Documents)
                    .HasForeignKey(d => d.InId)
                    .HasConstraintName("fk_document_in_id");

                entity.HasOne(d => d.LIdNavigation)
                    .WithMany(p => p.Documents)
                    .HasForeignKey(d => d.LId)
                    .HasConstraintName("fk_document_ln_id");

                entity.HasOne(d => d.Pr)
                    .WithMany(p => p.Documents)
                    .HasForeignKey(d => d.PrId)
                    .HasConstraintName("fk_document_pr_id");
            });

            modelBuilder.Entity<IncomeDetail>(entity =>
            {
                entity.HasKey(e => e.InId)
                    .HasName("pk_inid");

                entity.ToTable("INCOME_DETAILS");

                entity.Property(e => e.InId).HasColumnName("IN_ID");

                entity.Property(e => e.Cid).HasColumnName("CID");

                entity.Property(e => e.MonthlySalary).HasColumnName("MONTHLY_SALARY");

                entity.Property(e => e.OrganizationAddress)
                    .IsRequired()
                    .IsUnicode(false)
                    .HasColumnName("ORGANIZATION_ADDRESS");

                entity.Property(e => e.OrganizationName)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("ORGANIZATION_NAME");

                entity.Property(e => e.OrganizationType)
                    .IsRequired()
                    .HasMaxLength(30)
                    .IsUnicode(false)
                    .HasColumnName("ORGANIZATION_TYPE");

                entity.Property(e => e.RetirementAge)
                    .HasColumnName("RETIREMENT_AGE")
                    .HasDefaultValueSql("((60))");

                entity.Property(e => e.TypeEmployment)
                    .IsRequired()
                    .HasMaxLength(10)
                    .IsUnicode(false)
                    .HasColumnName("TYPE_EMPLOYMENT");

                entity.HasOne(d => d.CidNavigation)
                    .WithMany(p => p.IncomeDetails)
                    .HasForeignKey(d => d.Cid)
                    .HasConstraintName("fk_income_cid");
            });

            modelBuilder.Entity<Loan>(entity =>
            {
                entity.HasKey(e => e.LId)
                    .HasName("pk_lid");

                entity.ToTable("LOAN");

                entity.Property(e => e.LId).HasColumnName("L_ID");

                entity.Property(e => e.Cid).HasColumnName("CID");

                entity.Property(e => e.InId).HasColumnName("IN_ID");

                entity.Property(e => e.InterestRate)
                    .HasColumnName("INTEREST_RATE")
                    .HasDefaultValueSql("((8.5))");

                entity.Property(e => e.LoanAmt).HasColumnName("LOAN_AMT");

                entity.Property(e => e.MaxLoan).HasColumnName("MAX_LOAN");

                entity.Property(e => e.PrId).HasColumnName("PR_ID");

                entity.Property(e => e.Tenure).HasColumnName("TENURE");

                entity.HasOne(d => d.CidNavigation)
                    .WithMany(p => p.Loans)
                    .HasForeignKey(d => d.Cid)
                    .HasConstraintName("fk_loan_cid");

                entity.HasOne(d => d.In)
                    .WithMany(p => p.Loans)
                    .HasForeignKey(d => d.InId)
                    .HasConstraintName("fk_loan_in_id");

                entity.HasOne(d => d.Pr)
                    .WithMany(p => p.Loans)
                    .HasForeignKey(d => d.PrId)
                    .HasConstraintName("fk_loan_pr_id");
            });

            modelBuilder.Entity<PersonalDetail>(entity =>
            {
                entity.HasKey(e => e.Cid)
                    .HasName("pk_cid");

                entity.ToTable("Personal_Details");

                entity.HasIndex(e => e.Email, "UQ__Personal__161CF7248A45034A")
                    .IsUnique();

                entity.HasIndex(e => e.AadharNo, "UQ__Personal__3DCC0C6F0E3F25F7")
                    .IsUnique();

                entity.HasIndex(e => e.PhoneNumber, "UQ__Personal__D94A4FFB27E92A1F")
                    .IsUnique();

                entity.HasIndex(e => e.PanNo, "UQ__Personal__FB2312A85D85D14B")
                    .IsUnique();

                entity.Property(e => e.Cid).HasColumnName("CID");

                entity.Property(e => e.AadharNo).HasColumnName("AADHAR_NO");

                entity.Property(e => e.Address)
                    .IsRequired()
                    .IsUnicode(false)
                    .HasColumnName("ADDRESS");

                entity.Property(e => e.Age).HasColumnName("AGE");

                entity.Property(e => e.ConfirmPassword)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("CONFIRM_PASSWORD");

                entity.Property(e => e.Dob)
                    .HasColumnType("date")
                    .HasColumnName("DOB");

                entity.Property(e => e.Email)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("EMAIL");

                entity.Property(e => e.FirstName)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("FIRST_NAME");

                entity.Property(e => e.Gender)
                    .HasMaxLength(10)
                    .IsUnicode(false)
                    .HasColumnName("GENDER");

                entity.Property(e => e.LastName)
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("LAST_NAME");

                entity.Property(e => e.MiddleName)
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("MIDDLE_NAME");

                entity.Property(e => e.Nationality)
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("NATIONALITY")
                    .HasDefaultValueSql("('INDIAN')");

                entity.Property(e => e.PanNo)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("PAN_NO");

                entity.Property(e => e.Password)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("PASSWORD");

                entity.Property(e => e.PhoneNumber)
                    .IsRequired()
                    .HasMaxLength(10)
                    .IsUnicode(false)
                    .HasColumnName("PHONE_NUMBER");
            });

            modelBuilder.Entity<Property>(entity =>
            {
                entity.HasKey(e => e.PrId)
                    .HasName("pk_prid");

                entity.ToTable("PROPERTY");

                entity.Property(e => e.PrId).HasColumnName("PR_ID");

                entity.Property(e => e.Amount).HasColumnName("AMOUNT");

                entity.Property(e => e.Cid).HasColumnName("CID");

                entity.Property(e => e.InId).HasColumnName("IN_ID");

                entity.Property(e => e.Location)
                    .IsRequired()
                    .HasMaxLength(30)
                    .IsUnicode(false)
                    .HasColumnName("LOCATION");

                entity.Property(e => e.PropertyName)
                    .IsRequired()
                    .HasMaxLength(30)
                    .IsUnicode(false)
                    .HasColumnName("PROPERTY_NAME");

                entity.HasOne(d => d.CidNavigation)
                    .WithMany(p => p.Properties)
                    .HasForeignKey(d => d.Cid)
                    .HasConstraintName("fk_property_cid");

                entity.HasOne(d => d.In)
                    .WithMany(p => p.Properties)
                    .HasForeignKey(d => d.InId)
                    .HasConstraintName("fk_property_in_id");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
