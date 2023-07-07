import type { Meta, StoryObj } from '@storybook/react';

import WarningAmberOutlined from '../../lib/alert/WarningAmberOutlined';

const meta: Meta<typeof WarningAmberOutlined> = {
  component: WarningAmberOutlined,
  tags: ['autodocs'],
  title: 'alert/WarningAmberOutlined',
};

export default meta;
type Story = StoryObj<typeof WarningAmberOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
