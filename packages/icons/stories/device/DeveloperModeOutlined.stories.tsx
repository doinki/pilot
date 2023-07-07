import type { Meta, StoryObj } from '@storybook/react';

import DeveloperModeOutlined from '../../lib/device/DeveloperModeOutlined';

const meta: Meta<typeof DeveloperModeOutlined> = {
  component: DeveloperModeOutlined,
  tags: ['autodocs'],
  title: 'device/DeveloperModeOutlined',
};

export default meta;
type Story = StoryObj<typeof DeveloperModeOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
