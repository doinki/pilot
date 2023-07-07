import type { Meta, StoryObj } from '@storybook/react';

import TagFacesOutlined from '../../lib/image/TagFacesOutlined';

const meta: Meta<typeof TagFacesOutlined> = {
  component: TagFacesOutlined,
  tags: ['autodocs'],
  title: 'image/TagFacesOutlined',
};

export default meta;
type Story = StoryObj<typeof TagFacesOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
