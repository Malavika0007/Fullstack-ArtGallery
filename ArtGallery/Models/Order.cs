namespace ArtGallery.Models
{
    public class Order
    {
        public int Id { get; set; }
        public string UserId { get; set; } // Foreign key for ApplicationUser
        public User User { get; set; }
        public DateTime OrderDate { get; set; }
        public decimal TotalPrice { get; set; }

        // This assumes a simple order system. For a more complex system,
        // you might have an OrderDetail model to handle multiple artworks per order.
        public List<OrderDetail> OrderDetail { get; set; }
    }
}
