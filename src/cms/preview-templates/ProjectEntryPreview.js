import React from 'react'
import PropTypes from 'prop-types'
import { ProjectEntryTemplate } from '../../templates/project-entry'

const ProjectEntryPreview = ({ entry, widgetFor }) => {
  const tags = entry.getIn(['data', 'tags'])
  return (
    <ProjectEntryTemplate
      content={widgetFor('body')}
      description={entry.getIn(['data', 'description'])}
      tags={tags && tags.toJS()}
      title={entry.getIn(['data', 'projectName'])}
    />
  )
}

ProjectEntryPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default ProjectEntryPreview
