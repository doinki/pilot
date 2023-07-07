import type { Meta, StoryObj } from '@storybook/react';

import WidgetsOutlined from '../../lib/device/WidgetsOutlined';

const meta: Meta<typeof WidgetsOutlined> = {
  component: WidgetsOutlined,
  tags: ['autodocs'],
  title: 'device/WidgetsOutlined',
};

export default meta;
type Story = StoryObj<typeof WidgetsOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
