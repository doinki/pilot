import type { Meta, StoryObj } from '@storybook/react';

import WorkspacePremiumOutlined from '../../lib/social/WorkspacePremiumOutlined';

const meta: Meta<typeof WorkspacePremiumOutlined> = {
  component: WorkspacePremiumOutlined,
  tags: ['autodocs'],
  title: 'social/WorkspacePremiumOutlined',
};

export default meta;
type Story = StoryObj<typeof WorkspacePremiumOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
