import type { Meta, StoryObj } from '@storybook/react';

import VolcanoOutlined from '../../lib/social/VolcanoOutlined';

const meta: Meta<typeof VolcanoOutlined> = {
  component: VolcanoOutlined,
  tags: ['autodocs'],
  title: 'social/VolcanoOutlined',
};

export default meta;
type Story = StoryObj<typeof VolcanoOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
