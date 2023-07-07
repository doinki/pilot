import type { Meta, StoryObj } from '@storybook/react';

import PinEndOutlined from '../../lib/action/PinEndOutlined';

const meta: Meta<typeof PinEndOutlined> = {
  component: PinEndOutlined,
  tags: ['autodocs'],
  title: 'action/PinEndOutlined',
};

export default meta;
type Story = StoryObj<typeof PinEndOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
