import React, { useEffect } from 'react'
import { forEach } from 'lodash-es'
import './styles.css'

import './pdfjs/compatibility'
import 'jquery'

const scripts = [
  'turnjs/turn.min.js',
  'turnjs/zoom.min.js',
  'pdfjs/build/pdf',
  'pdfjs/debugger',
  'pdfjs/viewer',
  'pdf-flip.js'
]

const FlipBook = () => {
  useEffect(() => {
    forEach(maps, (source) => {
      const script = document.createElement('script')
      script.src = source
      script.async = true
      document.body.appendChild(script)
    })
  }, [])

  return (
    <div>
      <div className='se-pre-con'>
        <div id='loaderWrapper'>
          <div className='icon'>
            <svg id='bookicon' xmlns='http://www.w3.org/2000/svg'>
              <defs>
                <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='a'>
                  <stop stopcolor='#980F20' offset='0%' />
                  <stop stopcolor='#860E1D' offset='100%' />
                </linearGradient>
              </defs>
              <path
                d='M177.833 8.333V66.18l-4.166.488V0c-16.23.496-31.271 3.175-41.675 9.65C121.592 3.175 106.567.496 90.333 0v66.667l-4.166-.488V8.333H82v62.5h37.737c6.163 0 6.838 4.167 12.255 4.167 5.433 0 6.087-4.167 12.258-4.167H182v-62.5h-4.167zm-50 56.855c-8.108-3.217-17.237-5.288-29.166-6.184V8.792c9.8.82 20.816 2.812 29.166 8.008v48.388zm37.5-6.184c-11.929.896-21.058 2.967-29.166 6.184V16.8c8.35-5.196 19.366-7.188 29.166-8.008v50.212z'
                transform='translate(-82)'
                fill='#980f20'
                fillrule='nonzero'
              />
            </svg>
          </div>
          <div className='loader'></div>
          <span id='loadingText' className='title'>
            Loading Preview
          </span>
        </div>
      </div>
      <div id='outerContainer'>
        <div id='sidebarContainer'>
          <div id='toolbarSidebar'>
            <div className='splitToolbarButton toggled'>
              <button id='viewThumbnail'></button>
              <button id='viewOutline' />
              <button id='viewAttachments'></button>
            </div>
          </div>
          <div id='sidebarContent'>
            <div id='thumbnailView' />
            <div id='outlineView' className='hidden' />
            <div id='attachmentsView' className='hidden' />
          </div>
        </div>
        {/* sidebarContainer */}
        <div id='mainContainer'>
          <div id='secondaryToolbar' className='hidden'>
            <div id='secondaryToolbarButtonContainer'>
              <button
                id='secondaryPresentationMode'
                className='secondaryToolbarButton presentationMode visibleLargeView'
                title='Switch to Presentation Mode'
                tabIndex={51}
                data-l10n-id='presentation_mode'
              >
                <span data-l10n-id='presentation_mode_label'>
                  Presentation Mode
                </span>
              </button>
              <button
                id='secondaryPrint'
                className='secondaryToolbarButton print visibleMediumView'
                title='Print'
                tabIndex={53}
                data-l10n-id='print'
              >
                <span data-l10n-id='print_label'>Print</span>
              </button>
              <a
                href='#'
                id='secondaryViewBookmark'
                className='hidden secondaryToolbarButton bookmark visibleSmallView'
                title='Current view (copy or open in new window)'
                tabIndex={55}
                data-l10n-id='bookmark'
              >
                <span data-l10n-id='bookmark_label'>Current View</span>
              </a>
              <div className='horizontalToolbarSeparator visibleLargeView' />
              <button
                id='firstPage'
                className='secondaryToolbarButton firstPage'
                title='Go to First Page'
                tabIndex={56}
                data-l10n-id='first_page'
              >
                <span data-l10n-id='first_page_label'>Go to First Page</span>
              </button>
              <button
                id='lastPage'
                className='secondaryToolbarButton lastPage'
                title='Go to Last Page'
                tabIndex={57}
                data-l10n-id='last_page'
              >
                <span data-l10n-id='last_page_label'>Go to Last Page</span>
              </button>
              <div className='horizontalToolbarSeparator hidden' />
              <button
                id='pageRotateCw'
                className='secondaryToolbarButton hidden rotateCw'
                title='Rotate Clockwise'
                tabIndex={58}
                data-l10n-id='page_rotate_cw'
              >
                <span data-l10n-id='page_rotate_cw_label'>
                  Rotate Clockwise
                </span>
              </button>
              <button
                id='pageRotateCcw'
                className='secondaryToolbarButton hidden rotateCcw'
                title='Rotate Counterclockwise'
                tabIndex={59}
                data-l10n-id='page_rotate_ccw'
              >
                <span data-l10n-id='page_rotate_ccw_label'>
                  Rotate Counterclockwise
                </span>
              </button>
              <div className='horizontalToolbarSeparator hidden' />
              <button
                id='toggleHandTool'
                className='secondaryToolbarButton handTool'
                style={{ display: 'none' }}
                title='Enable hand tool'
                tabIndex={60}
                data-l10n-id='hand_tool_enable'
              >
                <span data-l10n-id='hand_tool_enable_label'>
                  Enable hand tool
                </span>
              </button>
              <button id='documentProperties'></button>
            </div>
          </div>
          {/* secondaryToolbar */}
          <div className='toolbar'>
            <div id='toolbarContainer'>
              <div id='toolbarViewer'>
                <div id='toolbarViewerLeft'>
                  <button
                    id='sidebarToggle'
                    className='toolbarButton'
                    title='Toggle Sidebar'
                    tabIndex={11}
                    data-l10n-id='toggle_sidebar'
                  >
                    <span data-l10n-id='toggle_sidebar_label'>
                      Toggle Sidebar
                    </span>
                  </button>
                  <div className='toolbarButtonSpacer' />
                  <button
                    id='viewFind'
                    style={{ display: 'none' }}
                    className='toolbarButton group hiddenSmallView'
                    title='Find in Document'
                    tabIndex={12}
                    data-l10n-id='findbar'
                  >
                    <span data-l10n-id='findbar_label'>Find</span>
                  </button>
                  <div className='splitToolbarButton'>
                    <button
                      className='toolbarButton pageUp'
                      title='Previous Page'
                      id='previous'
                      tabIndex={13}
                      data-l10n-id='previous'
                    >
                      <span data-l10n-id='previous_label'>Previous</span>
                    </button>
                    <div className='splitToolbarButtonSeparator' />
                    <button
                      className='toolbarButton pageDown'
                      title='Next Page'
                      id='next'
                      tabIndex={14}
                      data-l10n-id='next'
                    >
                      <span data-l10n-id='next_label'>Next</span>
                    </button>
                  </div>
                  <label
                    id='pageNumberLabel'
                    className='toolbarLabel'
                    htmlFor='pageNumber'
                    data-l10n-id='page_label'
                  >
                    Page:
                  </label>
                  <input
                    type='number'
                    id='pageNumber'
                    className='toolbarField pageNumber'
                    defaultValue={1}
                    size={4}
                    min={1}
                    tabIndex={15}
                  />
                  <span id='numPages' className='toolbarLabel' />
                </div>
                <div id='toolbarViewerRight'>
                  <button id='presentationMode'></button>
                  {/*<button id="openFile" class="toolbarButton openFile hiddenLargeView" title="Open File" tabindex="32" data-l10n-id="open_file">
          <span data-l10n-id="open_file_label">Open</span>
        </button>*/}
                  <button
                    id='print'
                    style={{ display: 'none' }}
                    className='toolbarButton print hiddenMediumView'
                    title='Print'
                    tabIndex={33}
                    data-l10n-id='print'
                  >
                    <span data-l10n-id='print_label'>Print</span>
                  </button>
                  <button id='download' />
                  <a
                    href='#'
                    id='viewBookmark'
                    className='toolbarButton hidden bookmark hiddenSmallView'
                    title='Current view (copy or open in new window)'
                    tabIndex={35}
                    data-l10n-id='bookmark'
                  >
                    <span data-l10n-id='bookmark_label'>Current View</span>
                  </a>
                  <div className='verticalToolbarSeparator hiddenSmallView' />
                  <button
                    id='secondaryToolbarToggle'
                    className='toolbarButton'
                    title='Tools'
                    tabIndex={36}
                    data-l10n-id='tools'
                  >
                    <span data-l10n-id='tools_label'>Tools</span>
                  </button>
                </div>
                <div className='outerCenter '>
                  <div className='innerCenter' id='toolbarViewerMiddle'>
                    <div className='splitToolbarButton'>
                      <button
                        id='zoomOut'
                        className='toolbarButton zoomOut'
                        title='Zoom Out'
                        tabIndex={21}
                        data-l10n-id='zoom_out'
                      >
                        <span data-l10n-id='zoom_out_label'>Zoom Out</span>
                      </button>
                      <div className='splitToolbarButtonSeparator' />
                      <button
                        id='zoomIn'
                        className='toolbarButton zoomIn'
                        title='Zoom In'
                        tabIndex={22}
                        data-l10n-id='zoom_in'
                      >
                        <span data-l10n-id='zoom_in_label'>Zoom In</span>
                      </button>
                    </div>
                    <select
                      id='scaleSelect'
                      style={{ display: 'none' }}
                    ></select>
                  </div>
                </div>
              </div>
              <div id='loadingBar'>
                <div className='progress'>
                  <div className='glimmer' />
                </div>
              </div>
            </div>
          </div>
          <menu type='context' id='viewerContextMenu'>
            <menuitem
              id='contextFirstPage'
              label='First Page'
              data-l10n-id='first_page'
            />
            <menuitem
              id='contextLastPage'
              label='Last Page'
              data-l10n-id='last_page'
            />
            <menuitem
              id='contextPageRotateCw'
              label='Rotate Clockwise'
              data-l10n-id='page_rotate_cw'
            />
            <menuitem
              id='contextPageRotateCcw'
              label='Rotate Counter-Clockwise'
              data-l10n-id='page_rotate_ccw'
            />
          </menu>
          <div id='viewerContainer' tabIndex={0}>
            <div id='viewer' className='pdfViewer' />
          </div>
          <div id='errorWrapper' hidden='true'>
            <div id='errorMessageLeft'>
              <span id='errorMessage' />
              <button id='errorShowMore' data-l10n-id='error_more_info'>
                More Information
              </button>
              <button
                id='errorShowLess'
                data-l10n-id='error_less_info'
                hidden='true'
              >
                Less Information
              </button>
            </div>
            <div id='errorMessageRight'>
              <button id='errorClose' data-l10n-id='error_close'>
                Close
              </button>
            </div>
            <div className='clearBoth' />
            <textarea
              id='errorMoreInfo'
              hidden='true'
              readOnly='readonly'
              defaultValue={''}
            />
          </div>
        </div>
        {/* mainContainer */}
        <div id='overlayContainer' className='hidden'>
          <div id='passwordOverlay' className='container hidden'>
            <div className='dialog'>
              <div className='row'>
                <p id='passwordText' data-l10n-id='password_label'>
                  Enter the password to open this PDF file:
                </p>
              </div>
              <div className='row'>
                <input type='password' id='password' className='toolbarField' />
              </div>
              <div className='buttonRow'>
                <button id='passwordCancel' className='overlayButton'>
                  <span data-l10n-id='password_cancel'>Cancel</span>
                </button>
                <button id='passwordSubmit' className='overlayButton'>
                  <span data-l10n-id='password_ok'>OK</span>
                </button>
              </div>
            </div>
          </div>
          <div id='documentPropertiesOverlay'></div>
        </div>
      </div>
    </div>
  )
}

export default FlipBook
