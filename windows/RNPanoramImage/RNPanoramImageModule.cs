using ReactNative.Bridge;
using System;
using System.Collections.Generic;
using Windows.ApplicationModel.Core;
using Windows.UI.Core;

namespace Panoram.Image.RNPanoramImage
{
    /// <summary>
    /// A module that allows JS to share data.
    /// </summary>
    class RNPanoramImageModule : NativeModuleBase
    {
        /// <summary>
        /// Instantiates the <see cref="RNPanoramImageModule"/>.
        /// </summary>
        internal RNPanoramImageModule()
        {

        }

        /// <summary>
        /// The name of the native module.
        /// </summary>
        public override string Name
        {
            get
            {
                return "RNPanoramImage";
            }
        }
    }
}
