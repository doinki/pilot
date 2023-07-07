import type { Meta, StoryObj } from '@storybook/react';

import WarningOutlined from '../../lib/alert/WarningOutlined';

const meta: Meta<typeof WarningOutlined> = {
  component: WarningOutlined,
  tags: ['autodocs'],
  title: 'alert/WarningOutlined',
};

export default meta;
type Story = StoryObj<typeof WarningOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
