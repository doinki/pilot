import type { Meta, StoryObj } from '@storybook/react';

import CollectionsOutlined from '../../lib/image/CollectionsOutlined';

const meta: Meta<typeof CollectionsOutlined> = {
  component: CollectionsOutlined,
  tags: ['autodocs'],
  title: 'image/CollectionsOutlined',
};

export default meta;
type Story = StoryObj<typeof CollectionsOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
