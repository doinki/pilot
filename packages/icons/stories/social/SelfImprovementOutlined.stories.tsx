import type { Meta, StoryObj } from '@storybook/react';

import SelfImprovementOutlined from '../../lib/social/SelfImprovementOutlined';

const meta: Meta<typeof SelfImprovementOutlined> = {
  component: SelfImprovementOutlined,
  tags: ['autodocs'],
  title: 'social/SelfImprovementOutlined',
};

export default meta;
type Story = StoryObj<typeof SelfImprovementOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
