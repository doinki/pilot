import type { Meta, StoryObj } from '@storybook/react';

import DisplaySettingsOutlined from '../../lib/action/DisplaySettingsOutlined';

const meta: Meta<typeof DisplaySettingsOutlined> = {
  component: DisplaySettingsOutlined,
  tags: ['autodocs'],
  title: 'action/DisplaySettingsOutlined',
};

export default meta;
type Story = StoryObj<typeof DisplaySettingsOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
