import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ name, price, images, slug }) => {
  const navigate = useNavigate();

  const handleProduct = () => {
    navigate(`/products/${slug}`);
  };

  return (
    <Card onClick={handleProduct}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={images[0] || "https://via.placeholder.com/200"}
          height="200"
          alt={name}
          title={name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Price: ${price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
