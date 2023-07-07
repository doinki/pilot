import type { Meta, StoryObj } from '@storybook/react';

import TitleOutlined from '../../lib/editor/TitleOutlined';

const meta: Meta<typeof TitleOutlined> = {
  component: TitleOutlined,
  tags: ['autodocs'],
  title: 'editor/TitleOutlined',
};

export default meta;
type Story = StoryObj<typeof TitleOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
