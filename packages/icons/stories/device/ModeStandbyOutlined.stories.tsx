import type { Meta, StoryObj } from '@storybook/react';

import ModeStandbyOutlined from '../../lib/device/ModeStandbyOutlined';

const meta: Meta<typeof ModeStandbyOutlined> = {
  component: ModeStandbyOutlined,
  tags: ['autodocs'],
  title: 'device/ModeStandbyOutlined',
};

export default meta;
type Story = StoryObj<typeof ModeStandbyOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
