import { Stack } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

interface BlogCardProps {
    category: string;
    title: string;
    description: string;
    imageUrl: string;
}

export default function BlogCard(props: BlogCardProps) {
    const { category, title, description, imageUrl } = props;

    return (
        <Card
            sx={{
                boxShadow: 4,
                maxWidth: 384,
                mx: "auto",
                backgroundColor: "#fff",
                borderRadius: 0,
            }}
        >
            <Stack spacing={2} sx={{ p: 3, gap: 4 }}>
                <CardMedia
                    component="img"
                    height="240"
                    image={imageUrl}
                    alt={title}
                    sx={{ objectFit: "cover" }}
                />
                <CardContent
                    sx={{
                        p: 0,
                        "&:last-child": {
                            paddingBottom: 0,
                        },
                    }}
                >
                    <Typography
                        sx={{
                            fontFamily: "'Roboto', sans-serif",
                            fontSize: "0.875rem",
                            fontWeight: 600,
                            lineHeight: 1.5,
                            color: "#1a73e8",
                            mb: 1,
                            textAlign: "left",
                        }}
                    >
                        {category}
                    </Typography>
                    <Typography
                        sx={{
                            fontFamily: "'Roboto Slab', serif",
                            fontSize: "1.25rem",
                            fontWeight: 700,
                            lineHeight: 1.4,
                            color: "#212121",
                            mb: 1,
                            textAlign: "left",
                        }}
                    >
                        {title}
                    </Typography>
                    <Typography
                        sx={{
                            fontFamily: "'Roboto', sans-serif",
                            fontSize: "1rem",
                            fontWeight: 400,
                            lineHeight: 1.5,
                            color: "#757575",
                            mb: 1,
                            textAlign: "left",
                        }}
                    >
                        {description}
                    </Typography>
                </CardContent>
            </Stack>
        </Card>
    );
}