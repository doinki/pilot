import type { Meta, StoryObj } from '@storybook/react';

import DesktopAccessDisabledOutlined from '../../lib/communication/DesktopAccessDisabledOutlined';

const meta: Meta<typeof DesktopAccessDisabledOutlined> = {
  component: DesktopAccessDisabledOutlined,
  tags: ['autodocs'],
  title: 'communication/DesktopAccessDisabledOutlined',
};

export default meta;
type Story = StoryObj<typeof DesktopAccessDisabledOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
