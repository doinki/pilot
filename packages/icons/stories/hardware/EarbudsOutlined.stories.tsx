import type { Meta, StoryObj } from '@storybook/react';

import EarbudsOutlined from '../../lib/hardware/EarbudsOutlined';

const meta: Meta<typeof EarbudsOutlined> = {
  component: EarbudsOutlined,
  tags: ['autodocs'],
  title: 'hardware/EarbudsOutlined',
};

export default meta;
type Story = StoryObj<typeof EarbudsOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
