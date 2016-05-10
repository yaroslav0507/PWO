import org.apache.cordova.CordovaWebView;
import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CordovaInterface;
import android.util.Log;
import android.provider.Settings;
import android.widget.Toast;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

public class MyPlugin extends CordovaPlugin {

  public static final String TAG = "My Plugin";

  public MyPlugin() {}

  public void initialize(CordovaInterface cordova, CordovaWebView webView) {
    super.initialize(cordova, webView);
    Log.v(TAG,"Init MyPlugin");
  }

  public boolean execute(final String action, JSONArray args, CallbackContext callbackContext) throws JSONException {

    final int duration = Toast.LENGTH_SHORT;

    Log.v(TAG,"MyPlugin received:"+ action);

    cordova.getActivity().runOnUiThread(new Runnable() {
      public void run() {
        Toast toast = Toast.makeText(cordova.getActivity().getApplicationContext(), action, duration);
        toast.show();
      }
    });

    return true;
  }
}
