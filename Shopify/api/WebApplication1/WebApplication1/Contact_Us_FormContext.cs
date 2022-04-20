using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace WebApplication1
{
    public partial class Contact_Us_FormContext : DbContext
    {
        public Contact_Us_FormContext()
        {
        }

        public Contact_Us_FormContext(DbContextOptions<Contact_Us_FormContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Checkout> Checkouts { get; set; }
        public virtual DbSet<ContactU> ContactUs { get; set; }
        public virtual DbSet<HelpCenter> HelpCenters { get; set; }
        public virtual DbSet<Productpage> Productpages { get; set; }
        public virtual DbSet<ShoppingCart> ShoppingCarts { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseNpgsql("host=localhost;database=Contact_Us_Form ;user id=postgres;password=root;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "English_United States.1252");

            modelBuilder.Entity<Checkout>(entity =>
            {

                entity.ToTable("checkout");

                entity.Property(e => e.Id)
                    .ValueGeneratedOnAdd()
                    .HasColumnName("id")
                    .UseIdentityAlwaysColumn();

                entity.Property(e => e.Name)
                    .HasMaxLength(255)
                    .HasColumnName("name");

                entity.Property(e => e.Price).HasColumnName("price");
            });

            modelBuilder.Entity<ContactU>(entity =>
            {

                entity.ToTable("contact_us");

                entity.Property(e => e.Email)
                    .HasMaxLength(20)
                    .HasColumnName("email");

                entity.Property(e => e.Id)
                    .ValueGeneratedOnAdd()
                    .HasColumnName("id");

                entity.Property(e => e.Phone).HasColumnName("phone");

                entity.Property(e => e.Usermessage)
                    .HasMaxLength(100)
                    .HasColumnName("usermessage");

                entity.Property(e => e.Username)
                    .HasMaxLength(20)
                    .HasColumnName("username");
            });

            modelBuilder.Entity<HelpCenter>(entity =>
            {
                entity.ToTable("help_center");

                entity.Property(e => e.Id)
                    .HasColumnName("id")
                    .UseIdentityAlwaysColumn();

                entity.Property(e => e.Descriptions)
                    .HasMaxLength(2000)
                    .HasColumnName("descriptions");

                entity.Property(e => e.Orderno)
                    .HasMaxLength(20)
                    .HasColumnName("orderno");

                entity.Property(e => e.Problemtype)
                    .HasMaxLength(100)
                    .HasColumnName("problemtype");

                entity.Property(e => e.Productdetails)
                    .HasMaxLength(500)
                    .HasColumnName("productdetails");
            });

            modelBuilder.Entity<Productpage>(entity =>
            {

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.ProductDescription)
                    .HasMaxLength(255)
                    .HasColumnName("productDescription");

                entity.Property(e => e.ProductId).HasColumnName("productId");

                entity.Property(e => e.ProductImage)
                    .HasMaxLength(255)
                    .HasColumnName("productImage");

                entity.Property(e => e.ProductName)
                    .HasMaxLength(255)
                    .HasColumnName("productName");

                entity.Property(e => e.ProductPrice).HasColumnName("productPrice");
            });

            modelBuilder.Entity<ShoppingCart>(entity =>
            {

                entity.ToTable("shopping_cart");

                entity.Property(e => e.Id)
                    .ValueGeneratedOnAdd()
                    .HasColumnName("id")
                    .UseIdentityAlwaysColumn();

                entity.Property(e => e.Name)
                    .HasMaxLength(255)
                    .HasColumnName("name");

                entity.Property(e => e.Price).HasColumnName("price");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
