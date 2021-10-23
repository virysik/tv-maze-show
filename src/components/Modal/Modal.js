import { useEffect } from 'react'
import { Content, Backdrop } from './Modal.styled'
import { createPortal } from 'react-dom'
import PropTypes from 'prop-types'

export default function Modal({ show, onClose, children }) {
  const modalRoot = document.querySelector('#modal-root')

  useEffect(() => {
    if (!show) {
      return
    }

    const handleKeyDown = (e) => {
      if (e.code === 'Escape') {
        onClose()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [onClose, show])

  const handleBackdropClick = (e) => {
    if (e.target !== e.currentTarget) {
      e.stopPropagation()
      return
    }
    onClose()
  }

  return createPortal(
    <Backdrop onClick={handleBackdropClick}>
      <Content>{children}</Content>
    </Backdrop>,
    modalRoot,
  )
}

Modal.propTypes = {
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
}
