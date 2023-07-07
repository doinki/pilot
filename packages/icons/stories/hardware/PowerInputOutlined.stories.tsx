import type { Meta, StoryObj } from '@storybook/react';

import PowerInputOutlined from '../../lib/hardware/PowerInputOutlined';

const meta: Meta<typeof PowerInputOutlined> = {
  component: PowerInputOutlined,
  tags: ['autodocs'],
  title: 'hardware/PowerInputOutlined',
};

export default meta;
type Story = StoryObj<typeof PowerInputOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
