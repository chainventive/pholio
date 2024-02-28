import { ListedFileMetadata } from "./ListedFileMetadata";
import { ListedFileRegion } from "./ListedFileRegion";

export interface ListedFile {
    
    date_pinned: string;
    date_unpinned: string;
    id: string;
    ipfs_pin_hash: string;
    metadata: ListedFileMetadata;
    regions: ListedFileRegion[];
    size: number;
    user_id: string;
}