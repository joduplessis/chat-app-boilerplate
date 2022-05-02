const initialState = {
    drawer: false,
    ui: {
        main: { background: 'white' },
        button: { cursor: 'pointer', background: 'linear-gradient(30deg, #114235, #114235)', borderRadius: 3, height: 30, paddingLeft: 10, paddingRight: 10, border: '2px solid #114235', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', alignContent: 'center' },
        divider: { color: '#CCC', fontSize: 10, fontWeight: 400, textTransform: 'uppercase' },
        reply: {
            container: { background: 'white', borderTop: '0px solid #F7F9FA', zIndex: 2, width: '100%', height: 'auto', paddingTop: 10 },
            input: { background: '#F4F5F7', marginLeft: 55, padding: 20, marginRight: 10, borderRadius: 10, display: 'block', border: 0, flex: 1, color: '#a6aab2', fontSize: 14, fontWeight: 300 },
            reply: { paddingBottom: 30, paddingTop: 15, paddingLeft: 30, paddingRight: 30, flexDirection: 'row', display: 'flex', alignItems: 'center', alignContent: 'center', justifyContent: 'center' },
            icon: { marginLeft: 10, height: 18 }
        },
        toolbar: { display: 'none', background: 'linear-gradient(to right, #1FC39A, #19A896, #118090, #0D658D)', height: 4, width: '100%' },
        bubble: {
            them: {
                container: { padding: 10, background: '#F4F5F7', borderRadius: 10, borderTopLeftRadius: 3, maxWidth: '100%', marginTop: 5 },
                text: { color: '#303133', fontSize: 13, fontWeight: 400, position: 'relative', lineHeight: 1.3 }
            },
            me: {
                container: { padding: 10, background: 'linear-gradient(to bottom right, #199EDA, #2F9CFA)', borderRadius: 10, borderTopLeftRadius: 3, maxWidth: '100%', marginTop: 5 },
                text: { color: 'white', fontSize: 13, fontWeight: 400, position: 'relative', lineHeight: 1.3 }
            },
            size: 40,
            user: { color: '#303133', fontSize: 13, fontWeight: 500, marginRight: 10 },
            date: { color: '#90949c', fontSize: 12, fontWeight: 400, marginRight: 10 },
        },
        stream: {
            container: { background: 'white', width: '100%', paddingBottom: 15, borderBottom: '0px solid #1a2330', position: 'relative', textDecoration: 'none', cursor: 'pointer', display: 'flex', flexDirection: 'row', justifyContent: 'stretch', alignItems: 'stretch', alignContent: 'stretch' },
            inner: { flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', alignContent: 'flex-start' },
            title: {
                container: { width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', alignContent: 'center' },
                text: { flex: 1, textDecoration: 'none', color: '#303133', fontSize: 13, fontWeight: 500 },
                time: { color: '#D2D1D1', fontSize: 12, fontWeight: 400, marginLeft: 5 },
            },
            subtitle: { color: '#D2D1D1', fontSize: 12, fontWeight: 400, paddingTop: 4, lineHeight: 1.1 },
            count: { background: '#1FC39A', borderRadius: 20, padding: 5, paddingLeft: 10, paddingRight: 10, color: '#F7F9FA', fontSize: 12, fontWeight: 400, },
            radius: 12,
            size: 35,
        },
        contact: {
            container: { paddingBottom: 10, borderBottom: '0px solid #1a2330', position: 'relative', textDecoration: 'none', cursor: 'pointer', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', alignContent: 'center' },
            title: { textDecoration: 'none', color: 'white', fontSize: 14, fontWeight: 500 },
            label: { color: '#aadaff', fontSize: 10, fontWeight: 400 },
            count: { background: '#a6aab2', borderRadius: 20, padding: 5, paddingLeft: 10, paddingRight: 10, color: '#F7F9FA', fontSize: 12, fontWeight: 400, },
            size: 40,
        },
        heading: {
            container: { background: 'white', padding: 20, paddingTop: 10, paddingBottom: 10, borderBottom: '1px solid #F4F5F7', borderTop: '1px solid #F4F5F7', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', alignContent: 'center' },
            title: { color: '#303133', fontSize: 9, fontWeight: 700, textTransform: 'uppercase', },
        },
        more: { color: '#a6aab2', fontSize: 12, fontWeight: 400, marginTop: 20, },
        dock: {
            container: { background: '#F7F8FA', zIndex: 6, width: 350, position: 'relative', display: 'flex', flexDirection: 'row', justifyContent: 'stretch', alignItems: 'stretch', alignContent: 'stretch' },
            inner: {  flex: 1, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'stretch', alignItems: 'stretch', alignContent: 'stretch' },
            panels: { background: 'white', padding: 20, paddingBottom: 0, paddingTop: 20 },
            scroll: { borderRight: '1px solid #F4F5F7', overflow: 'scroll', flex: 1 },
            search: {
                container: { borderRight: '1px solid #F4F5F7', background: '#F7F8FA', display: 'flex', flexDirection: 'row', justifyContent: 'stretch', alignItems: 'center', alignContent: 'stretch' },
                inner: { padding: 5, margin: 10, background: 'transparent', borderRadius: 10, flex: 1, display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', alignContent: 'center' },
                text: { opacity: 0.2, textDecoration: 'none', color: '#191919', fontSize: 14, fontWeight: 400, marginLeft: 10 },
            },
            header: {
                container: { background: 'white', paddingLeft: 20, paddingRight: 0, height: 70, display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', alignContent: 'center' },
                size: 40,
            },
            toolbar: {
                container: { background: '#F4F5F7', width: 75, height: '100%', display: 'none', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', alignContent: 'center' },
                icon: { marginBottom: 15, height: 20, opacity: 0.5 },
                size: 40,
                radius: 200,
                spacing: 15
            }
        },
        drawer: {
            container: { borderLeft: '1px solid #eff1f2', boxShadow: '-50px 0px 50px 0 rgba(0, 0, 0, 0.0)', width: 300, background: '#F4F5F7', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', alignContent: 'center' },
            overview: { paddingLeft: 0, fontSize: 15, fontWeight: 300, color: '#90949c', lineHeight: 1.2, marginBottom: 10 },
            panels: { borderBottom: '1px solid #eff1f2', padding: 20, },
            nav: {
                container: { borderLeft: '1px solid #eff1f2', position: 'relative', height: '100%', width: 80, overflow: 'hidden', display: 'flex', flexDirection: 'column', flexWrap: 'nowrap', justifyContent: 'stretch', alignItems: 'center', alignContent: 'center' },
                scroll: { background: '#F4F5F7', borderLeft: '0px solid #eff1f2', overflow: 'scroll', flex: 1, display: 'flex', width: '100%', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', alignContent: 'center' },
                button_active: { position: 'relative', padding: 5, background: 'white', borderRadius: 50, marginTop: 25, marginBottom: -15, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', alignContent: 'center' },
                button_inactive: { position: 'relative', padding: 5, background: 'transparent', borderRadius: 50, marginTop: 25, marginBottom: -15, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', alignContent: 'center' },
                icon: { height: 20 },
            }
        },
        asset: {
            text: { color: 'white', fontSize: 12 },
            radius: 3,
            margin: 2,
            height: 100
        },
        header: {
            container: { height: 70, width: '100%', borderBottom: '1px solid #F4F5F7', display: 'flex', flexDirection: 'column', justifyContent: 'stretch', alignItems: 'stretch', alignContent: 'stretch' },
            inner: { paddingLeft: 30, paddingRight: 30,  flex: 1, display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', alignContent: 'center' },
            title: {
                text: { color: '#303133', fontSize: 28, fontWeight: 500 },
                label: { background: '#F4F5F7', padding: 10, paddingTop: 7, paddingBottom: 7, borderRadius: 20, color: '#8A95A1', fontSize: 12, fontWeight: 400, marginLeft: 10 },
            },
            label: {
                container: { cursor: 'pointer', position: 'relative', background: 'none', borderRadius: 20, padding: 0, paddingLeft: 10, marginLeft: 5, display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', alignContent: 'center'  },
                count: { background: 'linear-gradient(to bottom right, #199EDA, #2F9CFA)', borderRadius: 20, padding: 2, paddingLeft: 5, paddingRight: 5, position: 'absolute', bottom: -5, right: -7, color: '#F7F9FA', fontSize: 8, fontWeight: 400 },
                icon: { height: 18 },
            },
            icon: { marginRight: 30, marginLeft: -15, height: 18 },
            people: { background: '#F7F9FA', borderRadius: 20, padding: 5, paddingLeft: 10, paddingRight: 10, fontSize: 12, fontWeight: 400, color: '#a6aab2', marginRight: 30, marginLeft: -10 }
        },
        task: {
            inner: { background: 'white', padding: 5, marginBottom: 5, borderRadius: 10, flex: 1, flexDirection: 'row', display: 'flex', alignItems: 'center', alignContent: 'center', justifyContent: 'center' },
            text: { fontSize: 14, fontWeight: 400, color: '#90949c', marginRight: 10 },
            checkbox: { width: 14, height: 14, border: `1px solid #90949c`, borderRadius: 5, flexDirection: 'row', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: 10, marginLeft: 5 },
            date: { marginRight: 10, color: '#DDDFE2', fontSize: 12, fontWeight: 400  }
        },
    },
}

const common = (state = initialState, action) => {
    switch (action.type) {

        case 'DRAWER':
            return Object.assign({}, state, {
                drawer: action.payload,
            })

/*
        case 'NEWUSER_ADMIN':
            if (state.newuser_admin) {
                return Object.assign({}, state, {
                    newuser_admin: false,
                })
            } else {
                return Object.assign({}, state, {
                    newuser_admin: true,
                })
            }
        */

        default:
            return state
    }
}

export default common
