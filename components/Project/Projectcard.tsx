import Link from "next/link";
import { Badge } from "../ui/badge";
import { Card, CardContent, CardDescription, CardTitle } from "../ui/card";
import { FaGithub } from "react-icons/fa6";
import { GrGlobe } from "react-icons/gr";
import Image from "next/image";

// interface Data {
//     imgUrl: string,
//     title: string,
//     description: string,
//     tags: string[],
//     githubLink: string,
//     livelink: string
// }


export default function ProjectCard({data}: any){ // eslint-disable-line @typescript-eslint/no-explicit-any
    return <Card className="w-full sm:w-[29%] rounded-lg overflow-hidden shadow-lg h-[520px] flex flex-col" >
        <Image 
            src={data.imageUrl}
            alt="Project Thumbnail"
            width={400}
            height={500}
            className="w-full h-60"
        />
        <CardContent className="p-6 space-y-4 flex flex-col flex-grow justify-between">

            <div>
                <CardTitle className="text-xl font-semibold" >{data.title}</CardTitle>
                <CardDescription className="text-muted-foreground mt-2">
                    {data.description}
                </CardDescription>
            </div>

            <div className="space-y-2">
                <div className="text-sm font-medium">Technologies Used:</div>
                <div className="flex flex-wrap gap-2">
                    {data.tags.map((tag: any) => ( // eslint-disable-line @typescript-eslint/no-explicit-any
                        <Badge key={tag} variant={"outline"}>
                            {tag}
                        </Badge>
                    ))}
                </div>
            </div>

            <div className="flex items-center gap-4 mt-auto">
                <Link href={data.githubLink} 
                    className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                    prefetch={false}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaGithub className="w-4 h-4"/>
                    GitHub 
                </Link>
                

                <Link href={data.livelink} 
                    className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                    prefetch={false}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <GrGlobe className="w-4 h-4"/>
                    Live Link
                </Link>

            </div>
        </CardContent>
    </Card>
}