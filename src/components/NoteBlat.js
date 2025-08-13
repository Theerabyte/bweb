import React from 'react'
 
import { Download, FileText, ExternalLink } from 'lucide-react'
 
const NotenBlatt = ({title, link}) => {
  return (
    <div className="l">
        <div className="l">
            <FileText className="l" />
            <span className="l">{title}</span>
            </div>
            <div className="l">
            <a
                href={link}
                download
                className="l"
            >
                <Download className="l" />
            </a>
            <a
                href={link}
                target="_blank"
                className="l"
            >
                <ExternalLink className="l" />
            </a>
        </div>
    </div>
  )
}
 
export default NotenBlatt