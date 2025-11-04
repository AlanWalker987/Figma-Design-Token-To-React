// import { Stack } from "@mui/material";
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Typography from "@mui/material/Typography";

// interface BlogCardProps {
//     category: string;
//     title: string;
//     description: string;
//     imageUrl: string;
// }

// export default function BlogCard(props: BlogCardProps) {
//     const { category, title, description, imageUrl } = props;

//     return (
//         <Card
//             sx={{
//                 boxShadow: 4,
//                 maxWidth: 384,
//                 mx: "auto",
//                 backgroundColor: "#fff",
//                 borderRadius: 0,
//             }}
//         >
//             <Stack spacing={2} sx={{ p: 3, gap: 4 }}>
//                 <CardMedia
//                     component="img"
//                     height="240"
//                     image={imageUrl}
//                     alt={title}
//                     sx={{ objectFit: "cover" }}
//                 />
//                 <CardContent
//                     sx={{
//                         p: 0,
//                         "&:last-child": {
//                             paddingBottom: 0,
//                         },
//                     }}
//                 >
//                     <Typography
//                         sx={{
//                             fontFamily: "'Roboto', sans-serif",
//                             fontSize: "0.875rem",
//                             fontWeight: 600,
//                             lineHeight: 1.5,
//                             color: "#1a73e8",
//                             mb: 1,
//                             textAlign: "left",
//                         }}
//                     >
//                         {category}
//                     </Typography>
//                     <Typography
//                         sx={{
//                             fontFamily: "'Roboto Slab', serif",
//                             fontSize: "1.25rem",
//                             fontWeight: 700,
//                             lineHeight: 1.4,
//                             color: "#212121",
//                             mb: 1,
//                             textAlign: "left",
//                         }}
//                     >
//                         {title}
//                     </Typography>
//                     <Typography
//                         sx={{
//                             fontFamily: "'Roboto', sans-serif",
//                             fontSize: "1rem",
//                             fontWeight: 400,
//                             lineHeight: 1.5,
//                             color: "#757575",
//                             mb: 1,
//                             textAlign: "left",
//                         }}
//                     >
//                         {description}
//                     </Typography>
//                 </CardContent>
//             </Stack>
//         </Card>
//     );
// }

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
                backgroundColor: "var(--color-white)",
                borderRadius: 0,
            }}
        >
            <Stack
                spacing={2}
                sx={{ p: "var(--spacing-sp-6)", gap: "var(--spacing-sp-8)" }}
            >
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
                            fontFamily: "var(--font-family-text)",
                            fontSize: "var(--font-size-text-sm)",
                            fontWeight: "var(--font-weight-semi-bold)",
                            lineHeight: "var(--font-line-height-text-sm)",
                            color: "var(--color-primary-700)",
                            mb: "var(--spacing-sp-3)",
                            textAlign: "left",
                        }}
                    >
                        {category}
                    </Typography>
                    <Typography
                        sx={{
                            fontFamily: "var(--font-family-display)",
                            fontSize: "var(--font-size-display-xs)",
                            fontWeight: "var(--font-weight-bold)",
                            lineHeight: "var(--font-line-height-display-xs)",
                            color: "var(--color-gray-800)",
                            mb: "var(--spacing-sp-3)",
                            textAlign: "left",
                        }}
                    >
                        {title}
                    </Typography>
                    <Typography
                        sx={{
                            fontFamily: "var(--font-family-text)",
                            fontSize: "var(--font-size-text-md)",
                            fontWeight: "var(--font-weight-regular)",
                            lineHeight: "var(--font-line-height-text-md)",
                            color: "var(--color-gray-500)",
                            mb: "var(--spacing-sp-3)",
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