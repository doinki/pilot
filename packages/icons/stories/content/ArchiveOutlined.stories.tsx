import type { Meta, StoryObj } from '@storybook/react';

import ArchiveOutlined from '../../lib/content/ArchiveOutlined';

const meta: Meta<typeof ArchiveOutlined> = {
  component: ArchiveOutlined,
  tags: ['autodocs'],
  title: 'content/ArchiveOutlined',
};

export default meta;
type Story = StoryObj<typeof ArchiveOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
