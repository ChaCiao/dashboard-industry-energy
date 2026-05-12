// Left-side inputs panel - groups: Common / Green / Blue / Policy

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Leaf, Droplet, Coins } from "lucide-react";

export function InputsPanel() {
  return (
    <div className="rounded-lg border bg-card p-4 space-y-4">
      {/* Common inputs */}
      <div>
        <p className="mb-3 text-sm font-medium">Common inputs</p>
        <div className="space-y-3">
          <div>
            <Label htmlFor="country" className="text-xs text-muted-foreground">
              Country
            </Label>
            <select
              id="country"
              className="w-full rounded-md border bg-background px-3 py-1.5 text-xs"
            >
              <option>Korea</option>
              <option>Australia</option>
              <option>United States</option>
            </select>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <Label htmlFor="wacc" className="text-xs text-muted-foreground">
                WACC %
              </Label>
              <Input
                id="wacc"
                type="text"
                defaultValue="8.0"
                className="text-xs"
              />
            </div>
            <div>
              <Label htmlFor="life" className="text-xs text-muted-foreground">
                Life (yr)
              </Label>
              <Input
                id="life"
                type="text"
                defaultValue="20"
                className="text-xs"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Green H2 inputs */}
      <div className="border-t pt-4">
        <p className="mb-3 text-sm font-medium text-green-h2-dark flex items-center gap-1">
          <Leaf className="h-3.5 w-3.5" /> Green H2 inputs
        </p>
        <div className="space-y-3">
          <div>
            <Label className="text-xs text-muted-foreground">
              Power supply
            </Label>
            <select className="w-full rounded-md border bg-background px-3 py-1.5 text-xs">
              <option>Dedicated solar PV</option>
              <option>Onshore wind</option>
              <option>Grid</option>
            </select>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <Label className="text-xs text-muted-foreground">
                LCOE $/MWh
              </Label>
              <Input type="text" defaultValue="35" className="text-xs" />
            </div>
            <div>
              <Label className="text-xs text-muted-foreground">CF %</Label>
              <Input type="text" defaultValue="45" className="text-xs" />
            </div>
          </div>
        </div>
      </div>

      {/* Blue H2 inputs */}
      <div className="border-t pt-4">
        <p className="mb-3 text-sm font-medium text-blue-h2-dark flex items-center gap-1">
          <Droplet className="h-3.5 w-3.5" /> Blue H2 inputs
        </p>
        <div className="grid grid-cols-2 gap-2">
          <div>
            <Label className="text-xs text-muted-foreground">NG $/MMBtu</Label>
            <Input type="text" defaultValue="8.5" className="text-xs" />
          </div>
          <div>
            <Label className="text-xs text-muted-foreground">CO2 $/t</Label>
            <Input type="text" defaultValue="50" className="text-xs" />
          </div>
        </div>
      </div>

      {/* Policy / Incentives */}
      <div className="border-t pt-4">
        <p className="mb-3 text-sm font-medium text-warning-fin flex items-center gap-1">
          <Coins className="h-3.5 w-3.5" /> Policy / Incentives
        </p>
        <div className="space-y-2">
          <label className="flex items-center gap-2 text-xs text-muted-foreground cursor-pointer">
            <Checkbox defaultChecked /> CHPS (Korea)
          </label>
          <label className="flex items-center gap-2 text-xs text-muted-foreground cursor-pointer">
            <Checkbox /> IRA 45V (US)
          </label>
          <label className="flex items-center gap-2 text-xs text-muted-foreground cursor-pointer">
            <Checkbox defaultChecked /> Carbon price applied
          </label>
          <label className="flex items-center gap-2 text-xs text-muted-foreground cursor-pointer">
            <Checkbox /> Grant (CAPEX subsidy)
          </label>
        </div>
      </div>
    </div>
  );
}
