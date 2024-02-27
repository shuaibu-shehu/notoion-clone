import { Doc, Id } from '@/convex/_generated/dataModel'
import { useParams, useRouter } from 'next/navigation';
import React, { useState } from 'react'

interface DocumnetLsitProp{
    parentDocumentId?: Id<"documents">;
    level? : number;
    data: Doc<"documents">[] 

}

function DocumentList({
    parentDocumentId,
    level = 0,
}: DocumnetLsitProp) {
    const params = useParams()
    const router = useRouter()
    const [expanded, setExpanded] = useState(false)
  return (
    <div>document-list</div>
  )
}

export default DocumentList