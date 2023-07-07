import type { Meta, StoryObj } from '@storybook/react';

import SimCardOutlined from '../../lib/hardware/SimCardOutlined';

const meta: Meta<typeof SimCardOutlined> = {
  component: SimCardOutlined,
  tags: ['autodocs'],
  title: 'hardware/SimCardOutlined',
};

export default meta;
type Story = StoryObj<typeof SimCardOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
