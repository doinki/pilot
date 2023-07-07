import type { Meta, StoryObj } from '@storybook/react';

import DomainAddOutlined from '../../lib/social/DomainAddOutlined';

const meta: Meta<typeof DomainAddOutlined> = {
  component: DomainAddOutlined,
  tags: ['autodocs'],
  title: 'social/DomainAddOutlined',
};

export default meta;
type Story = StoryObj<typeof DomainAddOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
