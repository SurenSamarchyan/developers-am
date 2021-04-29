import styled from 'styled-components'

export const createSvgIcon = (Component) => {
    const SvgIcon = styled(Component)(
        {
            display: 'inline-block',
            flex: '0 0 auto',
        },
    )

    SvgIcon.defaultProps = {
        size: '1em',
        color: 'palette.koala',
    }

    return SvgIcon
}
