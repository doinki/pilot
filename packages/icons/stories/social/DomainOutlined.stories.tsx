import type { Meta, StoryObj } from '@storybook/react';

import DomainOutlined from '../../lib/social/DomainOutlined';

const meta: Meta<typeof DomainOutlined> = {
  component: DomainOutlined,
  tags: ['autodocs'],
  title: 'social/DomainOutlined',
};

export default meta;
type Story = StoryObj<typeof DomainOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
