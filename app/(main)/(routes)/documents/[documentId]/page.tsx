'use client'

import { Toolbar } from '@/components/toolbar'
import { api } from '@/convex/_generated/api'
import { Id } from '@/convex/_generated/dataModel'
import { useQuery } from 'convex/react'
import React from 'react'

interface DocumentIdPageProps {
  params: {
    documentId: Id<"documents">
  }
}


export default function DocumentId({
  params
}: DocumentIdPageProps) {
  const document = useQuery(api.documents.getById, {
    documentId: params.documentId
  })

  if (document === undefined) {
    return <div>Loading</div>
  }

  if (document === null) {
    return (
      <div>Not Found</div>
    )
  }

  return (
    <div className='pb-40'>
      <div className=' md:max-w-3xl lg:max-w-4xl mx-auto'>
        <div  className='h-[35vh]'/>
        <Toolbar initialData= {document} />
    
      </div>
    </div>
  )
}
